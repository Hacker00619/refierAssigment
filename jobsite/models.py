from django.db import models
from django.utils import timezone

# Create your models here.

class jobDiscription(models.Model):
    date = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=50)
    company = models.CharField(max_length=50)
    timing = models.CharField(max_length=50)
    WorkLocation = models.CharField(max_length=50,choices=(
        ('Remote','Remote'),
        ('In Office','In Office')))
    location = models.CharField(max_length=50)
    minSalary = models.CharField(max_length=50)
    maxSalary = models.CharField(max_length=50)
    incentive = models.CharField(max_length=50)
    workExMin = models.CharField(max_length=50)
    workExMax = models.CharField(max_length=50)
    vacancy = models.CharField(max_length=50)
    jobDesc = models.TextField()


'''
1. Title
2. Company
3. Work Time
4. Work Location
5. Location
6. Minimum Salary
7. Maximum Salary
8. Incentive
9. Work Experience Minimum
10. Work Experience Maximum
12. Vacancies
13. Job Discription
'''
