# Setup for Jenkins Pipeline

## Install Jenkins

***

1. Install Jenkins on your machine. You can follow the instructions on
   the [Jenkins website](https://www.jenkins.io/doc/book/installing/).
2. Start Jenkins depending on your operating system.
3. Open Jenkins in your browser by navigating to `http://localhost:8080`.
4. Unlock Jenkins by following the instructions on the screen.

## Install Plugins

***

1. Navigate to [Manage Jenkins](http://localhost:8080/manage/)
2. Click on Plugins or open this URL directly: [pluginManager](http://localhost:8080/manage/pluginManager/)
3. Search for the following plugins and install them if they are not already installed:
    - [Node.js Plugin](https://plugins.jenkins.io/nodejs/)
    - [Allure Plugin](https://plugins.jenkins.io/allure-jenkins-plugin/)
    - [HTML Publisher Plugin](https://plugins.jenkins.io/htmlpublisher/)
4. Complete the setup for Node.js in Jenkins by following the instructions in
   the [Node.js Plugin documentation](https://plugins.jenkins.io/nodejs/).

## Create a New Pipeline

***

1. Click on 'Create a new job' or 'New Item' on the Jenkins dashboard.
2. Choose item type as 'Pipeline' and give it a name.
3. Click on 'OK'. You can add a description if you want, but it is optional.
4. Now scroll to the 'Pipeline' section and choose 'Pipeline script from SCM'.
5. Choose the SCM (Source Code Management) as 'Git'.
6. Enter the repository URL.
7. Add your GitHub credentials. Ideally when authenticating GitHub from CLI or API, you should use a Personal Access
   Token. You can create one by following the
   instructions [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).
8. Once you have your Personal Access Token, you can use it to authenticate Jenkins with GitHub. You can add your GitHub
   username and the personal access token as the password.
9. Choose the branch you want to build.
10. Click on 'Save'.

## Add Jenkinsfile (Use Sample Jenkinsfile from Course)

***

> The sample Jenkinsfile used in course is
> available [here](https://github.com/ch-akash/pw-framework-with-ci/blob/master/Jenkinsfile)

1. Create a new file in the root of your project and name it `Jenkinsfile`.
2. Add and push the Jenkinsfile to your repository.

## Run the Pipeline

***

1. Go to the Jenkins dashboard.
2. Click on the pipeline you created.
3. Click on 'Build Now'.
4. You can see the build status and logs by clicking on the build number.

## Troubleshooting HTML Reports

***

- If the HTML Reports gives content security policy error, you can try setting the CSP header to empty string.

In 'Manage Jenkins' -> 'Script Console', run the following script:

```bash
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
```

In the next step, you can restart the pipeline from 'Report' stage and check if the issue is
resolved. [Read more about the CSP](https://www.jenkins.io/doc/book/security/configuring-content-security-policy/)

***
