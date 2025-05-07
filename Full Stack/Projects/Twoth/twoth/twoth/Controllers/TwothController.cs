using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using twoth.Data;
using twoth.Entities;
using twoth.Entities.Model;

namespace twoth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TwothController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;

        public TwothController(ApplicationDbContext dbContext) {
            this.dbContext = dbContext;
        }

        // Read all records  
        [HttpGet]
        public async Task<IActionResult> GetAllTwoths() {
            var allTwoths = await dbContext.Twoths.ToArrayAsync();
            return Ok(allTwoths);
        }

        // Create record
        [HttpPost]
        public IActionResult AddTwoth(AddTwoths addTwoths) {

            if(!ModelState.IsValid) return BadRequest(ModelState);

            var tempEntity = new Twoth() {
                Name = addTwoths.Name,
            };

            dbContext.Twoths.Add(tempEntity);
            dbContext.SaveChanges();

            return Ok(tempEntity);
        }

        // Read record by ID
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetTwothById(int id) {

            var tempEntity = dbContext.Twoths.Find(id);

            if(tempEntity == null) return NotFound();

            if(!ModelState.IsValid) return BadRequest();

            return Ok(tempEntity);
        }

        // Update Record
        [HttpPut]
        [Route("{id:int}")]
        public IActionResult UpdateTwoth(int id, UpdateTwoth updateTwoth) {

            var tempEntity = dbContext.Twoths.Find(id);

            if (tempEntity == null) return NotFound();

            if (!ModelState.IsValid) return BadRequest();

            tempEntity.Name = updateTwoth.Name;

            dbContext.SaveChanges();

            return Ok(tempEntity);
        }

        // Delete Record  
        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult DeleteTwoth(int id) { 
        
            var tempEntity = dbContext.Twoths.Find(id);

            if(tempEntity == null) return NotFound();

            dbContext.Twoths.Remove(tempEntity);
            dbContext.SaveChanges();
            return NoContent();

        }


    }
}
