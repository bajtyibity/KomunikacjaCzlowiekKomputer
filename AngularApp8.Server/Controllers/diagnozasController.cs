using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularApp8.Server;
using AngularApp8.Server.Data;

namespace AngularApp8.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class diagnozasController : ControllerBase
    {
        private readonly Diagnoza _context;

        public diagnozasController(Diagnoza context)
        {
            _context = context;
        }

        // GET: api/diagnozas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<diagnoza>>> Getdiagnoza()
        {
            var diagnoza = await _context.diagnoza.ToListAsync();
            return Ok(diagnoza);
        }

        // GET: api/diagnozas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<diagnoza>> Getdiagnoza(int id)
        {
            var diagnoza = await _context.diagnoza.FindAsync(id);

            if (diagnoza == null)
            {
                return NotFound();
            }

            return Ok(diagnoza);
        }

        // PUT: api/diagnozas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putdiagnoza(int id, diagnoza diagnoza)
        {
            if (id != diagnoza.Id)
            {
                return BadRequest();
            }

            _context.Entry(diagnoza).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!diagnozaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/diagnozas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<diagnoza>> Postdiagnoza(diagnoza diagnoza)
        {
            SortObjawy(diagnoza);
            _context.diagnoza.Add(diagnoza);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getdiagnoza", new { id = diagnoza.Id }, diagnoza);
        }

        // DELETE: api/diagnozas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletediagnoza(int id)
        {
            var diagnoza = await _context.diagnoza.FindAsync(id);
            if (diagnoza == null)
            {
                return NotFound();
            }

            _context.diagnoza.Remove(diagnoza);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool diagnozaExists(int id)
        {
            return _context.diagnoza.Any(e => e.Id == id);
        }

        private void SortObjawy(diagnoza diagnoza)
        {
            var objawy = new List<string>
            {
                diagnoza.Objaw1,
                diagnoza.Objaw2,
                diagnoza.Objaw3,
                diagnoza.Objaw4,
                diagnoza.Objaw5,
                diagnoza.Objaw6,
                diagnoza.Objaw7,
                diagnoza.Objaw8,
                diagnoza.Objaw9,
                diagnoza.Objaw10
            };

            var sortedObjawy = objawy.Where(o => !string.IsNullOrEmpty(o)).ToList();
            sortedObjawy.AddRange(objawy.Where(o => string.IsNullOrEmpty(o)));

            diagnoza.Objaw1 = sortedObjawy.ElementAtOrDefault(0);
            diagnoza.Objaw2 = sortedObjawy.ElementAtOrDefault(1);
            diagnoza.Objaw3 = sortedObjawy.ElementAtOrDefault(2);
            diagnoza.Objaw4 = sortedObjawy.ElementAtOrDefault(3);
            diagnoza.Objaw5 = sortedObjawy.ElementAtOrDefault(4);
            diagnoza.Objaw6 = sortedObjawy.ElementAtOrDefault(5);
            diagnoza.Objaw7 = sortedObjawy.ElementAtOrDefault(6);
            diagnoza.Objaw8 = sortedObjawy.ElementAtOrDefault(7);
            diagnoza.Objaw9 = sortedObjawy.ElementAtOrDefault(8);
            diagnoza.Objaw10 = sortedObjawy.ElementAtOrDefault(9);
        }
    }
}
