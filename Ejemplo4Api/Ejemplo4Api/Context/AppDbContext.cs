using Microsoft.EntityFrameworkCore;
using System;

namespace Ejemplo4Api.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    }
    public DbSet<Usuario> Usuario { get; set; }
}
