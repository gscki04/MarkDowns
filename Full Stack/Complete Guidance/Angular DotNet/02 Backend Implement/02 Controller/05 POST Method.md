## POST method  
```C#
        // Create an entry
        [HttpPost]
        public IActionResult AddSolo() {
            return null;
        }
```  

this is our POST methods, now let give it functionality.  

1. pass the DTO as a parameter.  
2. inside Employee entity inject data using DTO
3. add & save recieved payload using dbcontext
4. return status code  

## implemented  
```C#
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }
```  

## Full Snippet  
```C#
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SingleInput.Data;
using SingleInput.Model;
using SingleInput.Model.Entities;

namespace SingleInput.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class SoloController : ControllerBase {
        private readonly ApplicationDbContext dbContext;  // 🔄: Create this with (CTRL + .) = assign field, create it manually

        public SoloController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records
        [HttpGet]
        public async Task<IActionResult> GetAllSolo() {
            var allSolos = await dbContext.solos.ToListAsync();
            return Ok(allSolos);
        }

        // Add record
        [HttpPost]
        public IActionResult AddSolo(AddSoloDTO addSoloDTO) {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            var tempEntity = new Solo() {
                Name = addSoloDTO.Name,
                // add other properties here in future
            };

            dbContext.solos.Add(tempEntity);
            dbContext.SaveChanges();
            return Ok(tempEntity);
        }


    
    }
}

```  