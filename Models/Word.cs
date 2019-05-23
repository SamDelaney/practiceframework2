using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace WordsApi.Models
{
    public class Word
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string WordName { get; set; }

        [BsonElement("Vernacular")]
        public string Vernacular { get; set; }

        [BsonElement("Gloss")]
        public string GLoss { get; set; }


    }
}