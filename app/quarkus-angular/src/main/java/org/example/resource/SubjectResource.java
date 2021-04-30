/*
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package org.example.resource;

import org.example.data.SubjectRepository;
import org.example.domain.Subject;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Consumes(MediaType.APPLICATION_JSON)
@Path("/subjects")
@Produces(MediaType.APPLICATION_JSON)
public class SubjectResource {
    @Inject
    SubjectRepository repository;

    @GET
    @Path("{id}")
    public Response get(@PathParam("id") final Long id) {
        return repository.findById(id)
                .map(r -> Response.ok(r).build())
                .orElseGet(() -> Response.status(Response.Status.NOT_FOUND).build());
    }

    @POST
    public Subject insert(final Subject subject) {
        return repository.save(subject);
    }

    @DELETE
    @Path("{name}")
    public Response delete(@PathParam("name") final String name) {
        repository.deleteByName(name);
        return Response.noContent().build();
    }

    @GET
    public Iterable<Subject> list() {
        return repository.findAll();
    }
}
