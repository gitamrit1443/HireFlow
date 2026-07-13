using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace HireFlowBackend.Controllers;

public abstract class ApiControllerBase : ControllerBase
{
    protected Guid CurrentUserId
    {
        get
        {
            var id = User.FindFirstValue(ClaimTypes.NameIdentifier);
            return Guid.TryParse(id, out var userId) ? userId : Guid.Empty;
        }
    }
}
