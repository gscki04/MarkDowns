
# `C#` API Work Flow  
## **Create (POST Request):**

**Flow:**

### `Client Payload` → `Controller` → `API Endpoint Method` → `DTO` → `Entity/Model` → `Database`

**Detailed Steps:**

1. **Client Payload:** The client sends a JSON payload containing the data for the new resource.

2. **Controller:** The request reaches the designated controller responsible for handling the resource.

3. **API Endpoint Method:** The controller's action method for creating a resource is invoked.

4. **DTO (Data Transfer Object):** The incoming data is mapped to a DTO, which defines the structure of the data expected from the client.

5. **Entity/Model:** The DTO is then mapped to the corresponding entity/model that represents the database structure.

6. **Database:** The entity is saved to the database using the Entity Framework Core's DbContext.

## **Read All (GET Request):**

**Flow:**

### `Client Request` → `Controller` → `API Endpoint Method` → `Database` → `Entity/Model` → `DTO (if applicable)` → `Response to Client`

**Detailed Steps:**

1. **Client Request:** The client sends a GET request to retrieve all resources.

2. **Controller:** The request is routed to the appropriate controller.

3. **API Endpoint Method:** The controller's action method for retrieving all resources is executed.

4. **Database:** The method queries the database for all records of the resource.

5. **Entity/Model:** The database returns a list of entities/models.

6. **DTO (if applicable):** The entities can be mapped to DTOs to shape the data before sending it to the client.

7. **Response to Client:** The data is serialized to JSON and sent back to the client.

## **Read Single (GET Request):**

**Flow:**

### `Client Request (with ID)` → `Controller` → `API Endpoint Method` → `Database` → `Entity/Model` → `DTO (if applicable)` → `Response to Client`

**Detailed Steps:**

1. **Client Request (with ID):** The client sends a GET request with a specific resource ID to retrieve a single resource.

2. **Controller:** The request is directed to the relevant controller.

3. **API Endpoint Method:** The controller's action method for retrieving a single resource by ID is called.

4. **Database:** The method queries the database for the resource with the specified ID.

5. **Entity/Model:** The database returns the corresponding entity/model.

6. **DTO (if applicable):** The entity can be mapped to a DTO to format the data appropriately.

7. **Response to Client:** The data is serialized to JSON and returned to the client.

## **Update (PUT Request):**

**Flow:**

### `Client Payload (with ID)` → `Controller` → `API Endpoint Method` → `DTO` → `Entity/Model` → `Database`

**Detailed Steps:**

1. **Client Payload (with ID):** The client sends a PUT request with the resource ID and updated data.

2. **Controller:** The request reaches the appropriate controller.

3. **API Endpoint Method:** The controller's action method for updating a resource is invoked.

4. **DTO:** The incoming data is mapped to a DTO.

5. **Entity/Model:** The existing entity is retrieved from the database, updated with data from the DTO, and then saved back to the database.

6. **Database:** The changes are persisted in the database.

## **Delete (DELETE Request):**

**Flow:**

### ``Client Request (with ID)` → `Controller` → `API Endpoint Method` → `Database`

**Detailed Steps:**

1. **Client Request (with ID):** The client sends a DELETE request with the ID of the resource to be deleted.

2. **Controller:** The request is routed to the relevant controller.

3. **API Endpoint Method:** The controller's action method for deleting a resource is executed.

4. **Database:** The method locates the entity with the specified ID and removes it from the database.


# `Java` API Work Flow

## Create (`POST` Request)

**Flow:**

### `Client Payload` → `Controller` → `Service Layer` → `Repository Layer` → `Database`

**Detailed Steps:**

1. **Client Payload:** The client sends a JSON payload containing data for the new resource.

2. **Controller:** The request reaches the designated `Controller`, which handles HTTP requests.

3. **Service Layer:** The `Controller` delegates the request to the `Service` layer, which contains business logic.

4. **Repository Layer:** The `Service` layer interacts with the `Repository` layer (often using Spring Data JPA), which handles database operations.

5. **Database:** The `Repository` layer persists the `Entity` to the database.

## Read All (`GET` Request)

**Flow:**

### `Client Request` → `Controller` → `Service Layer` → `Repository Layer` → `Database` → `Repository Layer` → `Service Layer` → `Controller` → `Response to Client`  

**Detailed Steps:**

1. **Client Request:** The client sends a `GET` request to retrieve all resources.

2. **Controller:** The request is routed to the appropriate `Controller`.

3. **Service Layer:** The `Controller` delegates the request to the `Service` layer.

4. **Repository Layer:** The `Service` layer calls the `Repository` layer to fetch data from the database.

5. **Database:** The `Repository` layer retrieves the data from the database.

6. **Response to Client:** The data is passed back up through the layers to the `Controller`, which sends it to the client.

## Read Single (`GET` Request with ID)

**Flow:**

### `Client Request (with ID)` → `Controller` → `Service Layer` → `Repository Layer` → `Database` → `Repository Layer` → `Service Layer` → `Controller` → `Response to Client`

**Detailed Steps:**

1. **Client Request (with ID):** The client sends a `GET` request with a specific resource `ID`.

2. **Controller:** The request is directed to the relevant `Controller`.

3. **Service Layer:** The `Controller` delegates to the `Service` layer.

4. **Repository Layer:** The `Service` layer queries the `Repository` layer for the resource with the specified `ID`.

5. **Database:** The `Repository` layer retrieves the `Entity` from the database.

6. **Response to Client:** The `Entity` is passed back through the layers to the `Controller`, which returns it to the client.

## Update (`PUT` Request)

**Flow:**

### `Client Payload (with ID)` → `Controller` → `Service Layer` → `Repository Layer` → `Database` → `Repository Layer` → `Service Layer` → `Controller` → `Response to Client`

**Detailed Steps:**

1. **Client Payload (with ID):** The client sends a `PUT` request with the resource `ID` and updated data.

2. **Controller:** The request reaches the appropriate `Controller`.

3. **Service Layer:** The `Controller` passes the request to the `Service` layer.

4. **Repository Layer:** The `Service` layer interacts with the `Repository` layer to update the existing `Entity` in the database.

5. **Database:** The `Repository` layer saves the updated `Entity` to the database.

6. **Response to Client:** The updated `Entity` is returned through the layers to the `Controller`, which sends it to the client.

## Delete (`DELETE` Request)

**Flow:**

### `Client Request (with ID)` → `Controller` → `Service Layer` → `Repository Layer` → `Database`

**Detailed Steps:**

1. **Client Request (with ID):** The client sends a `DELETE` request with the `ID` of the resource to be deleted.

2. **Controller:** The request is routed to the relevant `Controller`.

3. **Service Layer:** The `Controller` delegates the request to the `Service` layer.

4. **Repository Layer:** The `Service` layer calls the `Repository` layer to delete the `Entity` from the database.

5. **Database:** The `Repository` layer removes the `Entity` from the database.
