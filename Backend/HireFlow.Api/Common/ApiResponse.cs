namespace HireFlowBackend.Common;

public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public T? Data { get; set; }

    public static ApiResponse<T> Ok(T data, string message = "Success") => new()
    {
        Success = true,
        Message = message,
        Data = data
    };

    public static ApiResponse<T> Fail(string message) => new()
    {
        Success = false,
        Message = message,
        Data = default
    };
}

public class ServiceResult<T>
{
    public bool IsSuccess { get; set; }
    public string? Error { get; set; }
    public T? Data { get; set; }

    public static ServiceResult<T> Ok(T data) => new() { IsSuccess = true, Data = data };
    public static ServiceResult<T> Fail(string error) => new() { IsSuccess = false, Error = error };
}

public class PagedResult<T>
{
    public List<T> Items { get; set; } = [];
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int TotalCount { get; set; }
    public int TotalPages => PageSize <= 0 ? 0 : (int)Math.Ceiling(TotalCount / (double)PageSize);
}
