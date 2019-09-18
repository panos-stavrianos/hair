module ML
  class Regress
    @model = nil
    @y_length = 0

    def predict(x)
      a = @model[2]
      b = @model[1]
      c = @model[0]
      a * (x ** 2) + b * x + c
    end

    def predict_in_future(x)
      predict(x + @y_length)
    end

    def regress(x, y, degree)
      x_data = x.map { |xi| (0..degree).map { |pow| (xi ** pow).to_r } }
      @y_length = y.length
      mx = Matrix[*x_data]
      my = Matrix.column_vector(y)
      @model = ((mx.t * mx).inv * mx.t * my).transpose.to_a[0].map(&:to_f)
    end
  end
end