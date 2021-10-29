pipeline {

  agent any

  stages {

    stage('Checkout Code') {

      steps {

        checkout([$class: 'GitSCM', extensions:[], userRemoteConfigs: [[credentialsId: 'g1t6CorporateLMSGit', url: 'git@github.com:dian-school/CorporateLMS.git']]])

      }

    }
    stage('Code Analysis') {

      steps {

        sh 
        ''' 
        python3 -m venv env source env/bin/activate pip3 install flake8 flake8 flask/app-combine.py 
        '''

      }

    }

  }

}