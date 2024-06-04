# Getting Started for React Native Setup

## IOS
- Install XCode on Any Ipad or Mac Device
 - If developing on an Ipad, use https://coder.com/blog/a-guide-to-writing-code-on-an-ipad

## Windows:
1. Install Ubuntu 24.04 for Windows to Work with WSL 2 - I used the Microsoft Store to install Ubuntu 24.04. Install Windows Subsystem Linux (WSL) 2
        sudo apt install wsl

2. Install & Configure WSL and Node.js
> https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl 

3. Create a default user 
        useradd --create-home --user-group --groups  adm,dialout,cdrom,floppy,sudo,audio,dip,video,plugdev,netdev --password "encryptedPassword" username

4. Add User to /etc/wsl.conf file
        nano /etc/wsl.conf

        # Add user to file
        [user]
        default=username

5. Login as new user
        sudo -u <username>
