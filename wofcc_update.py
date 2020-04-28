from ftplib import FTP
from os import walk

build_root = 'build'

def getCredentials():
    creds={}

    file = open(".env", "r")

    if file.mode == 'r':
        contents = file.readlines()

        for x in contents:
            if (x.startswith('FTP')):
                key = x.split('=')[0].split('_')[1].lower()
                value = x.split('=')[1].replace('\n', '')

                creds[key] = value

    return creds

def connect(ftp_creds):
    print('Connecting...')
    ftp = FTP(ftp_creds["url"])
    ftp.login(user=ftp_creds["user"],  passwd=ftp_creds["passwd"])

    return ftp

def close(ftp):
    try:
        ftp.quit()
        print('Ftp connection closed...')
    except:
        print('Error closing ftp connection...')

def upload_single_file(ftp, file):
        print('uploading ' + file)
        # ftp.storbinary('STOR '+ file, open(file, 'rb'))

def upload(ftp, path):
    for (path, sub_folders, files) in walk(path):
        print('Seraching ' + path + '...')

        for x in files:
            upload_single_file(ftp, path + '/' + x)

        for sub_folder in sub_folders:
            upload(ftp, sub_folder)
        break

def main():
    ftp_creds = getCredentials()

    ftp = connect(ftp_creds)

    # ftp.retrlines('LIST')

    upload(ftp,'build')

    '''
    - transfer files in build/root
        - 
    - transfer files in static
        - 
    '''

    close(ftp)

if __name__ == "__main__":
    main()