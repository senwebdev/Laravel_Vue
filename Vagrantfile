# -*- mode: ruby -*-
# vi: set ft=ruby :

### CUSTOMISE THE PARAMS BELOW ###
HOSTNAME = "dev.imd.com"
IP_ADDRESS = "192.168.33.101"

### END, NO MORE CUSTOMISATION ###


$provisionScript = <<-SCRIPT
#!/usr/bin/env bash
#
# Custom Vagrant provisioning profile for Scotch box pro
#

# change the redis bind address to 0.0.0.0
echo "== Performing updates to Redis =="
echo "== 1) Changing bind IP"
sudo sed -i -e 's/bind\s127\.0\.0\.1/bind 0\.0\.0\.0/g' /etc/redis/redis.conf

echo "== 2) Restarting Redis Server"
sudo /etc/init.d/redis-server restart

# change the mysql bind address to 0.0.0.0
echo "== Performing updates to MySQL =="
echo "== 1) Changing bind IP"
sudo sed -i -e 's/127\.0\.0\.1/0\.0\.0\.0/g' /etc/mysql/mysql.conf.d/mysqld.cnf

# grant the root IP permissions
echo "== 2) Granting IP permissions"
sudo mysql -uroot -proot -e "GRANT ALL ON *.* TO root@'192.168.33.1' IDENTIFIED BY 'root'" &>/dev/null
sudo mysql -uroot -proot -e "GRANT ALL ON *.* TO root@$IP_ADDRESS IDENTIFIED BY 'root'" &>/dev/null

# restart MySQL
echo "== 3) Restarting MySQL"
sudo /etc/init.d/mysql restart

# install xdebug
echo "== 4) Installing xDebug"
XDEBUG_INI=/etc/php/7.2/mods-available/xdebug.ini
sudo pecl install xdebug &>/dev/null
sudo touch $XDEBUG_INI
sudo printf "zend_extension=/usr/lib/php/20170718/xdebug.so
xdebug.remote_enable=1\nxdebug.remote_connect_back=1
xdebug.remote_port=9000\nxdebug.remote_host=#{IP_ADDRESS}" >> $XDEBUG_INI
sudo ln -s $XDEBUG_INI /etc/php/7.2/fpm/conf.d/30-xdebug.ini
sudo /etc/init.d/php7.2-fpm restart

# and we're done!
echo "== 5) We're done - go have fun!"

SCRIPT

Vagrant.configure("2") do |config|

    config.vm.box = "scotch/box-pro"
    config.vm.hostname = HOSTNAME
    config.vm.network "private_network", ip: IP_ADDRESS
    config.vm.synced_folder ".", "/var/www", :mount_options => ["dmode=777", "fmode=666"]

    config.vm.provision "shell", inline: $provisionScript

    # Optional NFS. Make sure to remove other synced_folder line too
    #config.vm.synced_folder ".", "/var/www", :nfs => { :mount_options => ["dmode=777","fmode=666"] }

end
