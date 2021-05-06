pipeline {
  agent {
    dockerfile {
      filename 'true'
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