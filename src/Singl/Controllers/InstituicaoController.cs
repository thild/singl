using System.Linq;
using Microsoft.AspNet.Mvc;
using Singl.Models;

namespace Singl.Controllers
{
    public class InstituicaoController : Controller
    {
        private DatabaseContext _context;

        public InstituicaoController(DatabaseContext context)
        {
            _context = context;    
        }

        // GET: Instituicao
        public IActionResult Index()
        {
            return View(_context.Instituicao.Single());
        }

        // GET: Instituicao/Edit/5
        public IActionResult Edit()
        {

            Instituicao instituicao = _context.Instituicao.Single();
            if (instituicao == null)
            {
                return HttpNotFound();
            }
            return View(instituicao);
        }

        // POST: Instituicao/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Instituicao instituicao)
        {
            if (ModelState.IsValid)
            {
                _context.Update(instituicao);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(instituicao);
        }
    }
}
