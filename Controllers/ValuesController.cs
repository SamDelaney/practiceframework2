using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WordsApi.Models;
using WordsApi.Services;

namespace WordsApi.Controllers
{
    [Route("v1/collection")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly WordService _wordService;

        public WordsController(WordService wordService)
        {
            _wordService = wordService;
        }

        // GET: v1/collection
        [HttpGet]
        public ActionResult<List<Word>> Get()
        {
            return _wordService.Get();
        }

        // GET: v1/collection/{id}
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

        // POST: v1/collection
        [HttpPost]
        public ActionResult<Word> Post(Word word)
        {
            _wordService.Create(word);

            return CreatedAtRoute("GetWord", new { id = word.Id.ToString() }, word);
        }

        // PUT: v1/collection/{id}
        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, Word wordIn)
        {
            var word = _wordService.Get(id);

            if (word == null)
            {
                return NotFound();
            }

            _wordService.Update(id, wordIn);

            return NoContent();
        }

        // DELETE: v1/collection/{id}
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