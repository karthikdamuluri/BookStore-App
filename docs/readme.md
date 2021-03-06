# User Stories

 1. As a guest user I would to search for books I like.
 
 ###### Acceptance Criteria:
    
    Create a search bar to find books by keyword
    
    Create a component generes to find books by category 

 2. As a guest user I would like to buy books using a secure payment
 
  ###### Acceptance Criteria:
  
     Create a payment page to make a transaction using credit or debit card
     
     Send invoice to the email
  
 3. As a I would like to login using my social networking accounts ( gmail/facebook )
 
  ###### Acceptance Criteria:
  
     User should be able to login using social media profiles 
     
     User should be able to login using email or personal mobile numbers
     
 4. As a user I would like to manage my profile (change passwords/ card information/ etc.,)
 
  ###### Acceptance Criteria:
  
     Create a page to manage personal profile to change passwords 
     
     User should be able to manage books in his wishlist 
     
 5. As a user I would like to search and add books to my wishlist.
 
  ###### Acceptance Criteria:
  
     Customer can add books to wishlist
     
     User should get notifications when there is a book avaliable from his wishlist

 6. As an administrator I would like to manage CRUD information

 ###### Acceptance Criteria:
 
    Admin should be able to delete/Update/add books 

# MisUser Stories

1. As a evil user I would like to use sql injection to alter data

    ###### Mitigation:

       Filter all the user input
   
       Using Web Application firewall settings 
   
       Limiting database privileges by context
   
2. As an ethical hacker I would like to use Denial of service attack to make all resources unavailable to users

    ###### Mitigation:

       By Deploying an antivirus program and firewall into the network
   
       Backup database regularly
   
3. As a cyber expert I would like to use phishing techniques

    ###### Mitigation:

       Frequently updating systems with latest security patches
   
       Deploying SPAM filters that can detect viruses, blank senders, etc.


4. As a malicious user I would like to Brute force the login page

    ###### Mitigation:

       Implementing account lockout policy 
   
       Use challenge-response tests to prevent automated submissions of the login page

# Mockup Diagrams:

![adminpage](https://user-images.githubusercontent.com/31106457/32411394-6e66180c-c1a7-11e7-94ca-5ac234cc0ddf.PNG)
![checkout](https://user-images.githubusercontent.com/31106457/32411395-6e8120b6-c1a7-11e7-8be7-7516f5060bc3.PNG)
![home page](https://user-images.githubusercontent.com/31106457/32411396-6e967452-c1a7-11e7-9e25-71251d19867c.PNG)
![user registration](https://user-images.githubusercontent.com/31106457/32411397-6eaa1f66-c1a7-11e7-965d-07dfc615efba.PNG)
![user settings](https://user-images.githubusercontent.com/31106457/32411398-6ebf016a-c1a7-11e7-9d7a-f2e025065b0c.PNG)
![user](https://user-images.githubusercontent.com/31106457/32411399-6eeaeeec-c1a7-11e7-9635-9781edf9d45c.PNG)
# System-Context
![systemcontext](https://github.com/swrp/BookStore-App/blob/master/docs/images/systemcontext.PNG)
# Container
![Container](https://github.com/swrp/BookStore-App/blob/master/docs/images/Container.PNG)
# Component
![component](https://github.com/swrp/BookStore-App/blob/master/docs/images/component.PNG)
