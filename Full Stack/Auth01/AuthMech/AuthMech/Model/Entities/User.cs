using Microsoft.AspNetCore.Identity;

namespace AuthMech.Model.Entities
{
    public class User : IdentityUser {

        public string FullName { get; set; }
    }

}