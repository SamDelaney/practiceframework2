using System;
using NUnit.Framework;
using WordsApi.Services;
using WordsApi;
using WordsApi.Controllers;
using WordsApi.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace TestDBApi
{

    
   
    
    /*
    public enum TestTypes
    {
        None,
        UnitTesting,
        IntegrationTesting,
        FlyByTheSeatOfYourPantsTesting
    }
    */

    [TestFixture]
    public class WordServiceTests
    {
        public IEnumerable<Word> WordsProperty
        {
            get
            {
                yield return new Word("name1", "vern1", "glo1");
                yield return new Word("name2", "vern2", "glo2");
                yield return new Word("name3", "vern3", "glo3");
                yield return new Word("name4", "vern4", "glo4");
            }
        }
        
        [TestCaseSource("WordsProperty")]
        public void CanCreate(Word word)
        { 
            //Arrange/Act
            IConfiguration config = (IConfiguration)new ConfigurationBuilder();
            WordService thisService = new WordService(config);
           
            Word returned = thisService.Create(word);
            //Assert
            Assert.That(word, Is.EqualTo(returned));
        }

        //returns a list of the collection
        [Test]
        public void CanGet(Word word)
        {
            //Arrange 
            IConfiguration config = (IConfiguration)new ConfigurationBuilder();
            WordService thisService = new WordService(config);

            System.Collections.Generic.List<Word> insertedWords = new System.Collections.Generic.List<Word>();
            System.Collections.Generic.List<Word> gotWords = new System.Collections.Generic.List<Word>();
            string returnedWord;
            //Act

            Word entry1 = new Word("word1", "vern1", "glo1");
            Word entry2 = new Word("word2", "vern2", "glo2");
            Word entry3 = new Word("word3", "vern3", "glo3");

            insertedWords.Add(entry1);
            insertedWords.Add(entry2);
            insertedWords.Add(entry3);

            returnedWord = thisService.Create(entry1).ToString();
            Assert.That(returnedWord, Is.EqualTo(entry1));
            returnedWord = thisService.Create(entry2).ToString();
            Assert.That(returnedWord, Is.EqualTo(entry2));
            returnedWord = thisService.Create(entry3).ToString();
            Assert.That(returnedWord, Is.EqualTo(entry3));

            gotWords = thisService.Get();

            //Assert
            Assert.That(insertedWords, Is.EqualTo(gotWords));
        }

        //returns a single word/document from the database
        [Test]
        public void  CanGet()
        {
            IConfiguration config = (IConfiguration)new ConfigurationBuilder();
            WordService thisService = new WordService(config);

            

            thisService.Create()
        }
    }
}
    

