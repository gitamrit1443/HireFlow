using HireFlowBackend.Common;
using HireFlowBackend.DTOs;

namespace HireFlowBackend.Services.Interfaces;

public interface IPlagiarismService
{
    Task<ServiceResult<PlagiarismCheckResponse>> CheckAsync(string text);
}
