# Run Playwright tests in Docker Environment

***

## Install Docker

***

>You must have Docker installed locally.

To run Playwright tests in a Docker environment, you need to have Docker installed on your machine. You can download
Docker from the [official website](https://www.docker.com/products/docker-desktop).

## Dockerfile

***

*Note: Get the latest version info of Playwright Image from [Playwright Documantation for Docker](https://playwright.dev/docs/docker)*

Create a `Dockerfile` in the root of your project with the following content:

```Dockerfile
# Get the base image of Node version latest
FROM node:latest

# Get the latest image of Playwright. 
FROM mcr.microsoft.com/playwright:v1.43.0-jammy

# Set the working directory
WORKDIR /app

# Set the environment path
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY package.json /app/
COPY src /app/src/
COPY tests /app/tests/
COPY tsconfig.json /app/
COPY playwright.config.ts /app/

# Install Libraries
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# Install dependencies
RUN npm install

# Set CI to true
ARG CI=true

# Run the tests
CMD ["npx", "playwright", "test"]
```

## Build Docker Image

***
To build the Docker image, run the following command:

```bash

docker build -t playwright-tests .
```

## Run Docker Container

***
To run the Docker container, execute the following command:

```bash

docker run playwright-tests
```

## Test Reports

***
To view the test results, you can use volume mount to map the test results to your local machine. Run the following
command:
***

### For Playwright HTML Reports

```bash

docker run -v $(pwd)/test-results:/app/test-results playwright-tests
```

### For Allure Reports

***

```bash

docker run -v $(pwd)/allure-results:/app/allure-results playwright-tests
```

You can map the test results to any directory on your local machine by changing the path in the volume mount. For any
reporter, you can use the the output directory specified in the `playwright.config.ts` file.

## Conclusion

***
In this guide, you learned how to run Playwright tests in a Docker environment. You can now run your tests in a
container and generate test reports using different reporters like HTML and Allure.

***
