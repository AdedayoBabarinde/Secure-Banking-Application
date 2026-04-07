FROM eclipse-temurin:21-jdk-alpine
RUN addgroup --system appgroup && adduser --system --ingroup appgroup --no-create-home appuser
WORKDIR /app
COPY target/*.jar app.jar
RUN chown appuser:appgroup app.jar
USER appuser
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
