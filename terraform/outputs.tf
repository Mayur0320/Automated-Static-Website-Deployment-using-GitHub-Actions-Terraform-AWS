output "bucket_name" {
  value = data.aws_s3_bucket.website.bucket
}

output "website_url" {
  value = aws_s3_bucket_website_configuration.website.website_endpoint
}

output "bucket_arn" {
  value = data.aws_s3_bucket.website.arn
}