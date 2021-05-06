pipeline {
  agent {
    docker {
      image 'node:15.10.0'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn'
      }
    }

  }
}