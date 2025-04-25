## Get By ID implmentation  
```C#
        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }
```  
## Full Code:  
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

        //Read one record by Id
       [HttpGet]
       [Route("{id:int}")]
        public IActionResult GetSoloById(int id) {

            var tempEntity = dbContext.solos.Find(id);

            if (tempEntity == null) { 
                return NotFound();
            }
            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }

            return Ok(tempEntity);
        }



    }
}
```  