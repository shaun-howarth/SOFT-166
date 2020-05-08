using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;





//The class containing the required principles for connecting to the MySQL database using C#. This DBConnect Class is required.



namespace ISAD157_MySQL_Data_Form
{
    class DBConnect
    {


        //MySQL username for MySQL Workbecnh 8.0

        internal const string USER_NAME = "ISAD157_SHowarth";



        //MySQL server name/address for for MySQL Workbecnh 8.0 

        internal const string SERVER = "proj-mysql.uopnet.plymouth.ac.uk";



        //MySQL server database name for MySQL Workbecnh 8.0

        internal const string DATABASE_NAME = "ISAD157_SHowarth";



        //MySQL password for account in MySQL Workbecnh 8.0

        internal const string PASSWORD = "ISAD157_22224850";



        //SslMode settings
        internal const string SslMode = "none";


    }
}
