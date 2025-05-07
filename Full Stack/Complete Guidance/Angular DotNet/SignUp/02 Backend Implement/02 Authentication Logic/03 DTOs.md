`Model\DTOs\Auth\LoginDto.cs`:  
```C#
namespace AuthMech.Model.DTOs.Auth {
    public class LoginDto {
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}
```  
`Model\DTOs\Auth\RegisterDto.cs`:  
```C#
namespace AuthMech.Model.DTOs.Auth {
    public class RegisterDto {
        public required string FullName { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
    }
}
```  