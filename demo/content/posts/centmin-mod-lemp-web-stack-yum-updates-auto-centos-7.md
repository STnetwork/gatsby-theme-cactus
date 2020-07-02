---
slug: "/blog/CENTMIN-MOD-LEMP-WEB-STACK-YUM-Updates-Auto-CentOS-7"
date: 2020-07-01T22:00:00Z
title: CENTMIN MOD LEMP WEB STACK - YUM Updates Auto - CentOS 7
excerpt: CENTMIN MOD
tags:
- yum
- centminmod
- centos

---

## Introduction

You will be able to install a LEMP on CentOS 7 by following this article. [Centmin Mod LEMP](http://centminmod.com/) is a Linux, Nginx, MariaDB MySQL & PHP-FPM web stack for CentOS 6.x & CentOS 7.x with a shell menu based installer. The shell based menu allows Nginx & PHP version management - upgrading or downgrading Nginx & PHP or setting up Nginx vhosts and much more.

Centmin Mod auto installs Nginx server on CentOS Linux with the following:

* Nginx
* PHP-FPM
* MariaDB
* PHP opcode cache : Zend OpCache, APC Cache, Xcache
* Memcached Server + Memcache
* Libmemcached + Memcached PHP Extension
* Multi-threaded compression: pigz, pbzip2, lbzip2, plzip, p7zip (optional)
* CSF Firewall
* Pure-FTPD Virtual FTP User support

Shell Based Menu :

    --------------------------------------------------------
         Centmin Mod Menu 123.09beta01 centminmod.com
    --------------------------------------------------------
    1).  Centmin Install
    2).  Add Nginx vhost domain
    3).  NSD setup domain name DNS
    4).  Nginx Upgrade / Downgrade
    5).  PHP Upgrade / Downgrade
    6).  XCache Re-install
    7).  APC Cache Re-install
    8).  XCache Install
    9).  APC Cache Install
    10). Memcached Server Re-install
    11). MariaDB MySQL Upgrade & Management
    12). Zend OpCache Install/Re-install
    13). Install/Reinstall Redis PHP Extension
    14). SELinux disable
    15). Install/Reinstall ImagicK PHP Extension
    16). Change SSHD Port Number
    17). Multi-thread compression: pigz,pbzip2,lbzip2...
    18). Suhosin PHP Extension install
    19). Install FFMPEG and FFMPEG PHP Extension
    20). NSD Install/Re-Install
    21). Update - Nginx + PHP-FPM + Siege
    22). Add Wordpress Nginx vhost + Cache Plugin
    23). Update Centmin Mod Code Base
    24). Exit
    --------------------------------------------------------
    Enter option [ 1 - 24 ]

### Prerequisites

* VPS or Local Machine on CentOS 6.x & CentOS 7.x
* Connection Internet on the machine
* Some knowledges in Linux

### Yum Update

It's much better to do `Yum update` before like that we save time.

    yum -y update && yum -y upgrade

***

## Centmin Mod LEMP Stack Install on CentOS

It's a quick curl installer method, it's easy just one line. This line will install automatically the lastest version.

    yum -y update; curl -O https://centminmod.com/betainstaller.sh && chmod 0700 betainstaller.sh && bash betainstaller.sh

### Edit color bash

Personally, I like change the Color Bash, in this case, it will be in green. Edit `.bashrc` in your User folder, then reboot the machine to apply the color.

    vim .bashrc
    export PS1="\e[1;32m[\u@\h \W]\$ \e[m "

### Add a Domain Name's Nginx Vhost Configuration

    cd /usr/local/src/centminmod
    ./centmin.sh
    option #2

### CENTMIN MOD Geting Started Guide

    hostnamectl set-hostname stnetwork.fr
    hostnamectl status
    nano /etc/hosts
    service network restart

[CENTMIN MOD Geting Started Guide](https://centminmod.com/getstarted.html)

### Auto Updating Centmin Mod Code

    mkdir -p /root/tools
    nano /root/tools/updatecm.sh
    #!/bin/bash
    branchname=123.09beta01
    cd /usr/local/src/centminmod
    git stash
    git pull
    git log -1

    chmod +x /root/tools/updatecm.sh
    15 */3 * * * /root/tools/updatecm.sh 2>/dev/null

### Auto Yum - Yum Cron

    yum -y install yum-cron
    chkconfig yum-cron on
    systemctl enable yum-cron.service
    email_to=your@email.com

        EMAIL=your@email.com
        sed -i "s|^email_to = root|email_to = ${EMAIL}|" /etc/yum/yum-cron.conf
        sed -i 's|^update_messages = no|update_messages = yes|' /etc/yum/yum-cron.conf
        sed -i 's|^download_updates = no|download_updates = yes|' /etc/yum/yum-cron.conf
        sed -i 's|^apply_updates = no|apply_updates = yes|' /etc/yum/yum-cron.conf
        sed -i 's|^emit_via = stdio|emit_via = email|' /etc/yum/yum-cron.conf
    
        sed -i "s|^email_to = root|email_to = ${EMAIL}|" /etc/yum/yum-cron-hourly.conf
        sed -i 's|^update_cmd = default|update_cmd = security|' /etc/yum/yum-cron-hourly.conf
        sed -i 's|^update_messages = no|update_messages = yes|' /etc/yum/yum-cron-hourly.conf
        sed -i 's|^download_updates = no|download_updates = yes|' /etc/yum/yum-cron-hourly.conf
        sed -i 's|^apply_updates = no|apply_updates = yes|' /etc/yum/yum-cron-hourly.conf
        sed -i 's|^emit_via = stdio|emit_via = email|' /etc/yum/yum-cron-hourly.conf   
    
        egrep '^email_to|^update_messages|^download_updates|^apply_updates|^emit_via' /etc/yum/yum-cron.conf
        egrep '^email_to|^update_cmd|^update_messages|^download_updates|^apply_updates|^emit_via' /etc/yum/yum-cron-hourly.conf
        service yum-cron restart