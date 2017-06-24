import sys
import urllib2


ip_page = urllib2.urlopen("http://www.dnsstuff.com/").read()
first_index = ip_page.find('Your')
# find returns the index if found else it returns -1, it finds the first occurance
ip_page2 = ip_page[first_index:]

# Your IP Address: <strong class="ipBlock">14.207.111.65</strong>Located near: <strong>Bangkok, Krung Thep Maha Nakhon (TH)
# extracting the ip
ip_index_start = ip_page2.find('>')+1
ip_index_stop = ip_page2.find('</')

public_ip = ip_page2[ip_index_start:ip_index_stop]

# extracting the location
ip_page_location = ip_page2[ip_index_stop+9:]


loc_index_start = ip_page_location.find('>')+1
loc_index_stop = ip_page_location.find(')')+1

ip_location = ip_page_location[loc_index_start:loc_index_stop]

print('Public IP: ' +public_ip)
print('Location: '+ ip_location)









# i = 0
# while True:

    # i += 1
    # print(i)
    # if "KEY" in about_page:
    #     print(about_page)
    #     sys.exit(0)
