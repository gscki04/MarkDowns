using Microsoft.EntityFrameworkCore;
using twoth.Entities.Model;

namespace twoth.Data {
    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options) {
            
        }

        public DbSet<Twoth> Twoths { get; set; }
    }
}
