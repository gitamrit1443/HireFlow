namespace HireFlow.Application.Common;

public class Result<T>
{
    public bool IsSuccess { get; private set; }
    public T? Data { get; private set; }
    public string? Error { get; private set; }
    public List<string> Errors { get; private set; } = new();

    public static Result<T> Success(T data) => new() { IsSuccess = true, Data = data };
    public static Result<T> Failure(string error) => new() { IsSuccess = false, Error = error };
    public static Result<T> Failure(List<string> errors) => new() { IsSuccess = false, Errors = errors, Error = string.Join("; ", errors) };
}

public class Result
{
    public bool IsSuccess { get; private set; }
    public string? Error { get; private set; }
    public static Result Success() => new() { IsSuccess = true };
    public static Result Failure(string error) => new() { IsSuccess = false, Error = error };
}

public class ApiResponse<T>
{
    public bool Success { get; set; }
    public string? Message { get; set; }
    public T? Data { get; set; }
    public List<string>? Errors { get; set; }
    public DateTime Timestamp { get; set; } = DateTime.UtcNow;

    public static ApiResponse<T> Ok(T data, string? message = null) =>
        new() { Success = true, Data = data, Message = message };

    public static ApiResponse<T> Fail(string error) =>
        new() { Success = false, Errors = new List<string> { error } };

    public static ApiResponse<T> Fail(List<string> errors) =>
        new() { Success = false, Errors = errors };
}

public class ApiResponse : ApiResponse<object>
{
    public new static ApiResponse Ok(string? message = null) =>
        new() { Success = true, Message = message };
    public new static ApiResponse Fail(string error) =>
        new() { Success = false, Errors = new List<string> { error } };
}

public class PagedResult<T>
{
    public List<T> Items { get; set; } = new();
    public int TotalCount { get; set; }
    public int Page { get; set; }
    public int PageSize { get; set; }
    public int TotalPages => (int)Math.Ceiling((double)TotalCount / PageSize);
    public bool HasNextPage => Page < TotalPages;
    public bool HasPreviousPage => Page > 1;
}
