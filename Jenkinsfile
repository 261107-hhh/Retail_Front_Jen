pipeline {
    agent any
	tools {
        // Install the Node package manager and add it to the path.
        nodejs 'node'
    }
    environment{
        CI = 'false'
    }
    stages {
        stage('Build') {
            steps {
              bat 'npm install'
              echo 'install required dependencies'  
            }
        }
         stage('Test') {
            steps {
                //bat './mvnw test'
                //bat 'mvn test'
                bat 'npm test'
                // bat 'npm run build'
                // bat 'npm test a'
                // bat 'npm test a --watchAll'
                // bat 'npm test --passWithNoTests'
                // bat 'npm test App.test.js --watchAll'
                // bat 'npm run coverage'
                echo 'tested'  
            }
        }
        stage('Deploy') {
            steps {
                bat 'npm run build'
	            bat 'npm install -g serve'
                bat 'serve -s build'
            }
        }
       
       
    }
}