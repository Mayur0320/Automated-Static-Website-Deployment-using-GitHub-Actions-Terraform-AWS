# Upload index.html
resource "aws_s3_object" "index" {

  bucket = aws_s3_bucket.website.id

  key = "index.html"

  source = "../website/index.html"

  content_type = "text/html"

  etag = filemd5("../website/index.html")
}

# Upload style.css
resource "aws_s3_object" "style" {

  bucket = aws_s3_bucket.website.id

  key = "style.css"

  source = "../website/style.css"

  content_type = "text/css"

  etag = filemd5("../website/style.css")
}

# Upload script.js
resource "aws_s3_object" "script" {

  bucket = aws_s3_bucket.website.id

  key = "script.js"

  source = "../website/script.js"

  content_type = "application/javascript"

  etag = filemd5("../website/script.js")
}