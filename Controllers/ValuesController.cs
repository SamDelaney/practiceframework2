using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WordsApi.Models;
using WordsApi.Services;

namespace WordsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly WordService _wordService;

        public WordsController(WordService wordService)
        {
            _wordService = wordService;
        }
        
        [HttpGet]
        public ActionResult<List<Word>> Get()
        {
            return _wordService.Get();
        }

        [HttpGet("{id:length(24)}", Name = "GetWord")]
        public ActionResult<Word> Get(string id)
        {
            var word = _wordService.Get(id);

            if (word == null)
            {
                return NotFound();
            }

            return word;
        }

        [HttpPost]
        public ActionResult<Word> Create(Word word)
        {
            _wordService.Create(word);

            return CreatedAtRoute("GetWord", new { id = word.Id.ToString() }, word);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, Word wordIn)
        {
            var word = _wordService.Get(id);

            if (word == null)
            {
                return NotFound();
            }

            _wordService.Update(id, wordIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var word = _wordService.Get(id);

            if (word == null)
            {
                return NotFound();
            }

            _wordService.Remove(word.Id);

            return NoContent();
        }
    }
}