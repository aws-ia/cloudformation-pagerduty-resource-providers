version: 0.2

phases:
  install:
    runtime-versions:
      python: 3.7
    commands:
      - echo Entered the install phase...
      - echo About to build $RESOURCE_PATH
      - export PATH="/usr/local/bin:$PATH"
      - /usr/local/bin/dockerd-entrypoint.sh
      - cat /var/log/docker.log
      - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
      - export NVM_DIR="$HOME/.nvm"
      - echo "Loading nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm install 14 && nvm install-latest-npm
      - npm --version
      - node --version
      - pwd
      - ls

  build:
    commands:
      - echo Entered the build phase...
      - npm install && npm run build
      - cd $RESOURCE_PATH
      - pwd
      - ls
      - npm install && npm run build
      - ./setup.sh
      - ../deregister-all.sh us-east-1
      - ../publish.sh us-east-1
      - ../deregister-all.sh us-west-2
      - ../publish.sh us-west-2
    finally:
      - cat rpdk.log
      - ./cleanup.sh    
