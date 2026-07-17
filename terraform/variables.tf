variable "aws_region" {

  description = "AWS Region"

  type = string

  default = "ap-south-1"

}

variable "bucket_name" {
  description = "Unique S3 Bucket Name"
  type        = string
  default     = "mayur-andhale-devops-website-20260717"
}