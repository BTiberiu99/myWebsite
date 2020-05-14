package actions

import (
	"management/models"
	"net/http"

	"github.com/gobuffalo/buffalo"
	"github.com/gobuffalo/pop"
	"github.com/pkg/errors"
)

// This file is generated by Buffalo. It offers a basic structure for
// adding, editing and deleting a page. If your model is more
// complex or you need more than the basic implementation you need to
// edit this file.

// Following naming logic is implemented in Buffalo:
// Model: Singular (Comment)
// DB Table: Plural (comments)
// Resource: Plural (Comments)
// Path: Plural (/comments)
// View Template Folder: Plural (/templates/comments/)

// CommentsResource is the resource for the Comment model
type CommentsResource struct {
	buffalo.Resource
}

// List gets all Comments. This function is mapped to the path
// GET /comments
func (v CommentsResource) List(c buffalo.Context) error {
	// Get the DB connection from the context
	tx, ok := c.Value("tx").(*pop.Connection)
	if !ok {
		return InternalError(c)
	}

	comments := &models.Comments{}

	// Paginate results. Params "page" and "per_page" control pagination.
	// Default values are "page=1" and "per_page=20".
	q := tx.PaginateFromParams(c.Params())

	// Retrieve all Comments from the DB
	if err := q.All(comments); err != nil {
		return InternalError(c)
	}

	return c.Render(http.StatusOK, r.JSON(Response{
		Data:       comments,
		Pagination: q.Paginator,
	}))
}

// Show gets the data for one Comment. This function is mapped to
// the path GET /comments/{comment_id}
func (v CommentsResource) Show(c buffalo.Context) error {
	// Get the DB connection from the context
	tx, ok := c.Value("tx").(*pop.Connection)
	if !ok {
		return InternalError(c)
	}

	// Allocate an empty User
	comment := &models.Comment{}

	// To find the User the parameter user_id is used.
	if err := tx.Find(comment, c.Param("comment_id")); err != nil {
		return Error(c, http.StatusForbidden, "comment.not_found")
	}

	return c.Render(http.StatusOK, r.JSON(Response{Data: comment}))
}

// New renders the form for creating a new Comment.
// This function is mapped to the path GET /comments/new
func (v CommentsResource) New(c buffalo.Context) error {
	return c.Error(http.StatusNotFound, errors.New("Not Implemented"))
}

// Create adds a Comment to the DB. This function is mapped to the
// path POST /comments
func (v CommentsResource) Create(c buffalo.Context) error {
	// Allocate an empty Comment
	comment := &models.Comment{}

	// Bind comment to the html form elements
	if err := c.Bind(comment); err != nil {

		return Error(c, http.StatusForbidden, "comments.created.failed")
	}

	// Get the DB connection from the context
	tx, ok := c.Value("tx").(*pop.Connection)
	if !ok {
		return InternalError(c)
	}

	// Validate the data from the html form
	verrs, err := tx.ValidateAndCreate(comment)

	if err != nil {
		return Error(c, http.StatusForbidden, "comments.created.failed")
	}

	if verrs.HasAny() {
		return Error(c, http.StatusForbidden, "comments.created.failed", verrs.Errors)
	}

	return Success(c, "comments.created.success", comment)
}

// Edit renders a edit form for a Comment. This function is
// mapped to the path GET /comments/{comment_id}/edit
func (v CommentsResource) Edit(c buffalo.Context) error {
	return c.Error(http.StatusNotFound, errors.New("Not Implemented"))
}

// Update changes a Comment in the DB. This function is mapped to
// the path PUT /comments/{comment_id}
func (v CommentsResource) Update(c buffalo.Context) error {
	// Get the DB connection from the context
	tx, ok := c.Value("tx").(*pop.Connection)
	if !ok {
		return InternalError(c)
	}

	// Allocate an empty Comment
	comment := &models.Comment{}

	if err := tx.Find(comment, c.Param("comment_id")); err != nil {

		return Error(c, http.StatusNotFound, "comments.updated.failed")
	}

	// Bind Comment to the html form elements
	if err := c.Bind(comment); err != nil {
		return Error(c, http.StatusForbidden, "comments.updated.failed")
	}

	verrs, err := tx.ValidateAndUpdate(comment)
	if err != nil {
		return InternalError(c)
	}

	if verrs.HasAny() {
		return Error(c, http.StatusForbidden, "comments.updated.failed", verrs.Errors)
	}

	return Success(c, "comments.updated.success", comment)
}

// Destroy deletes a Comment from the DB. This function is mapped
// to the path DELETE /comments/{comment_id}
func (v CommentsResource) Destroy(c buffalo.Context) (err error) {
	// Get the DB connection from the context
	tx, ok := c.Value("tx").(*pop.Connection)
	if !ok {
		return InternalError(c)
	}

	// Allocate an empty Comment
	comment := &models.Comment{}

	// To find the Comment the parameter comment_id is used.
	if err := tx.Find(comment, c.Param("comment_id")); err != nil {
		return Error(c, http.StatusForbidden, "comments.destroy.failed")
	}

	if err := tx.Destroy(comment); err != nil {
		return Error(c, http.StatusForbidden, "comments.destroy.failed")
	}

	return Success(c, "comments.destroy.success")
}