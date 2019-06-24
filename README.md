# Persistent Cloud-Based Application Form

A simple implementation of a cloud-based application form that actively saves your inputted data in a database as you type using React.JS and the Firebase API.  
Note: If you need ANY assistance setting up a copy of this program please don't hesitate to reach out to me! I would be ecstatic to help you out (at no charge of course!!), just open an issue! :)  

Main page:  
![image](https://user-images.githubusercontent.com/45691485/60056433-8284f580-96a6-11e9-9cb3-86749f80b7f9.png)

Start page prior to Firebase authentication:  
![image](https://user-images.githubusercontent.com/45691485/60056495-b4965780-96a6-11e9-926d-581b184ea91f.png)

Form auto-populates when a signed-in user comes back to the form they had filled out previously:  
![image](https://user-images.githubusercontent.com/45691485/60056629-28d0fb00-96a7-11e9-93a7-e2dfe70b850d.png)

## Getting Started

The following guide will help you get a copy of the project up and running on your local machine for development and testing purposes.  
  
**PLEASE NOTE THAT THIS IS VERY MUCH A WORK AND PROGRESS! YOU SHOULD NOT USE THIS CODE ON PRODUCTION SERVERS, OR ON ANY MACHINE WITH DATA YOU CARE ABOUT! THERE ARE NO GUARANTEES TO SECURITY WHEN USING THIS PROGRAM! FIREBASE APIs USED IN THIS PROGRAM ARE IN DEVELOPER MODE.**

Ideal use cases:  
* Organizations that require applications for leadership positions  
* Hackathons who need an application form that saves data of potential attendees so they can complete their application in multiple sittings  
* A test or other examination that may require more time than one sitting  

### Downloading
Download the files of this repository through git or move your cursor to the "download as ZIP" option in the top right. Unzip or move the files to an empty folder.

### Prerequisites

The script uses one key library that stores all appropriate data into the cloud: Firebase. Firebase is also responsible for the Google OAuth that is utilized to tie the response to an individual user.  
Please ensure you have:  
* Set up a new Firebase project
* Enabled Google OAuth sign-in in your new project
* Changed your database rules to the following:
```{
  "rules": {
    "submissions": {
      	"officer": {
          	"$uid": {
              	".read": "auth.uid == $uid",
                ".write": "auth.uid == $uid"
          	}
        },
        "journalism": {
          	"$uid": {
              	".read": "auth.uid == $uid",
                ".write": "auth.uid == $uid"
          	}
        },
        "policy": {
          	"$uid": {
              	".read": "auth.uid == $uid",
                ".write": "auth.uid == $uid"
          	}
        }
    },
  }
}
```  

## To run:
Simply type ``node index.js``.  
Any logged contents will appear in your console.

## Built With

* [Node.js](https://nodejs.org/) - The JS framework used in this project
* [Bulma CSS](https://bulma.io/) - The CSS library used in this project
* [Firebase](https://firebase.google.com/) - The backend framework utilized in this project

## Contributing

Feel free to contribute as you wish. Open pull requests when needed :)

## Authors

* **Ethan Sayre** - *Initial work* - [ethansayre](https://github.com/ethansayre)
* **Andrew P** - *Base CSS template* - [CodePen](https://codepen.io/andreich1980/pen/OmobJQ)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
