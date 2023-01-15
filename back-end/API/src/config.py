class DevelopmentConfig():
    DEBUG = True
    MYSQL_HOST = 'localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB = 'adrian'
    SERVER_NAME = '127.0.0.1:5000'
    

config={
    'development': DevelopmentConfig
}