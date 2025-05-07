using Microsoft.EntityFrameworkCore;
using Product_APIs.Model.Entities;

namespace Product_APIs.Data {
    public class ApplicationDBContext : DbContext {

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options): base(options) {
        
        }

        public DbSet<Product> products { get; set; }
    }
}