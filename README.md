# crud-person
A simple NodeJS/TypesScript CRUD implementation


## API

## Get a single person
_Return a single person_

**URL**: `/person/{id}`

**Method**: `GET`

**URL Parameters**: 
* `id=[string]` where `id` is the ID of the Person

**Query Parameters**: 
* `version=[string]` where `version` is the object version


### Success Response

**Code**: `200 OK`

**Content**: `{Person}`

## Get all persons
_Return all person objects (latest version)_

**URL**: `/person`

**Method**: `GET`


### Success Response

**Code**: `200 OK`

**Content**: `{Person}[]`

## Create a new person
_Creates a new person and returns person's ID_

**URL**: `/person`

**Method**: `POST`

**Body**: 
`Application/JSON`
``` js
{
  "firstame": [string]
  "lastName": [string]
  "middleName": [string] (optional)
  "email": [string]
  "age": [number]
}
```

### Success Response

**Code**: `200 OK`

**Content**: `{Person}[]`

## Update a person
_Update a person object_

**URL**: `/person/{id}`

**Method**: `PUT`

**URL Parameters**: 
* `id=[string]` where `id` is the ID of the Person

**Body**: 
`Application/JSON`
``` js
{
  "firstame": [string]
  "lastName": [string]
  "middleName": [string]
  "email": [string]
  "age": [number]
}
```


### Success Response

**Code**: `200 OK`

**Content**: `*Empty*`

## Delete a person
_Delete a person object_

**URL**: `/person/{id}`

**Method**: `DELETE`

**URL Parameters**: 
* `id=[string]` where `id` is the ID of the Person

### Success Response

**Code**: `200 OK`

**Content**: `*Empty*`


