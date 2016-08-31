#Our Pool Setup

## Mysql
* Max: `40`

## SQL 
* Min: `10`
* Max: `40`

## Oracle
* Min: `10`
* Max: `40`

# Configuration

Use the following settings when you install the databases locally if you want to use this program without modification.

## Mysql
* **user**: `root`
* **password**: `123456`

## SQL
* Make sure SQL Server authentication is enabled in database's properties.
* Make a SQL user and schema as follows:
  * **user**: `admin`
  * **pass**: `123456`
  * **schema**: `pool_test`

## Oracle Database
* **url**: `` ;Blank, means use local default DB
* **user**: `SYSTEM`
* **password**: `Oracle123`
* Must add the following path variables (edit were apropiate):
  * `set OCI_INC_DIR=C:\installclient\OCI\include`
  * `set OCI_LIB_DIR=C:\oracle\intallclient\OCI\lib\MSVC`
