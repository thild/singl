using System.Linq;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

namespace Singl.Controllers
{
    [Route("[controller]")]
    public class SetoresAdministrativosController : Controller
    {
        private DatabaseContext db = new DatabaseContext();

        // GET: Departamento
        [HttpGet()]
        public IActionResult Index()
        {
            return View(db.SetoresAdministrativos.ToList());
        }

        // GET: Departamento/5
        [HttpGet("{sigla}")]
        [Route("[action]/{sigla}")]
        public IActionResult Details(string sigla)
        {
            if (string.IsNullOrEmpty(sigla))
            {
                return new HttpStatusCodeResult(404);
            }

            var departamento = db.SetoresAdministrativos
                .Include(m => m.SubSetores)
                .Single(m => m.Sigla == sigla);
                
            if (departamento == null)
            {
                return new HttpStatusCodeResult(404);
            }

            return View(departamento);
        }
    }
}
