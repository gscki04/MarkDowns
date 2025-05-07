using Microsoft.EntityFrameworkCore;
using SingleInput.Model.Entities;

namespace SingleInput.Data {
    public class ApplicationDbContext : DbContext {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base (options) {
            // the constructor is automatically invoked every time you create an instance of a class
        }

        public DbSet<Solo> solos { get; set; }
    }
}
