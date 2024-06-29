using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AngularApp8.Server;

namespace AngularApp8.Server.Data
{
    public class Diagnoza : DbContext
    {
        public Diagnoza (DbContextOptions<Diagnoza> options)
            : base(options)
        {
        }

        public DbSet<AngularApp8.Server.diagnoza> diagnoza { get; set; } = default!;
    }
}
