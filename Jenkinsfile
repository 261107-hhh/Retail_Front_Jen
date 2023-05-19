pipeline {
    agent any
	// tools {
    //     // Install the Maven version configured as "M3" and add it to the path.
    //      maven 'mvn'
    // }
    stages {
        stage('Build') {
            steps {
              bat 'npm install'
              echo 'install required dependencies'  
            }
        }
        //  stage('Test') {
        //     steps {
        //         //bat './mvnw test'
        //         //bat 'mvn test'
        //         bat 'npm run build'
        //         // bat 'npm test'
        //         echo 'tested'  
        //     }
        // }
        //  stage('Deploy') {
        //     steps {
	    //         bat 'npm install -g serve'
        //         bat 'npm -s build -l 3001'
        //     }
        // }
       
       
    }
}