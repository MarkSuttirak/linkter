from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in linkter/__init__.py
from linkter import __version__ as version

setup(
	name="linkter",
	version=version,
	description="For inserting links",
	author="mark",
	author_email="mark@mail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
