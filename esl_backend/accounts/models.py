from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    is_staff = models.BooleanField(default=False)  # Fixed default to False
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_teacher = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'is_teacher']

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email

class Teacher(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.get_full_name()

class Student(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.get_full_name()

class Classes(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    students = models.ManyToManyField(Student)
    start_time = models.TimeField()
    end_time = models.TimeField()
    is_monday = models.BooleanField(default=False)
    is_tuesday = models.BooleanField(default=False)
    is_wednesday = models.BooleanField(default=False)
    is_thursday = models.BooleanField(default=False)
    is_friday = models.BooleanField(default=False)
    is_saturday = models.BooleanField(default=False)

    def __str__(self):
        return f"Class by {self.teacher.user.get_full_name()} at {self.start_time}"
