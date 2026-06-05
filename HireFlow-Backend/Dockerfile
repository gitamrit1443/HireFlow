FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["HireFlow.API/HireFlow.API.csproj", "HireFlow.API/"]
COPY ["HireFlow.Application/HireFlow.Application.csproj", "HireFlow.Application/"]
COPY ["HireFlow.Domain/HireFlow.Domain.csproj", "HireFlow.Domain/"]
COPY ["HireFlow.Infrastructure/HireFlow.Infrastructure.csproj", "HireFlow.Infrastructure/"]
RUN dotnet restore "HireFlow.API/HireFlow.API.csproj"
COPY . .
WORKDIR "/src/HireFlow.API"
RUN dotnet build "HireFlow.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HireFlow.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HireFlow.API.dll"]
